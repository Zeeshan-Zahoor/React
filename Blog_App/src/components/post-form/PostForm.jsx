import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select} from "../index"
import service from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RTE from "../RTE"




function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
      title: post?.title || "", 
      slug: post?.$id || "", 
      content: post?.content || "", 
      status: post?.status || 'active',
    }
  })
  
  console.log("Post ID:", post?.$id);
  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)

 const submit = async (data) => {
  console.log("Submitting with ID:", post.$id);
  console.log("Slug in data:", data.slug);

  try {
    let file = null;

    // Upload new image if exists
    if (data.image && data.image[0]) {
      file = await service.uploadFile(data.image[0]);
    }

    if (post) {
      // UPDATE POST
      if (file) {
        await service.deleteFile(post.featureImage);
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featureImage: file ? file.$id : post.featureImage,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }

    } else {
      // CREATE NEW POST
      const dbPost = await service.createPost({
        ...data,
        featureImage: file ? file.$id : null,
        userId: userData.$id,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }

  } catch (error) {
    console.log("Post submission error:", error);
  }
};


  const slugTransform = useCallback((value) => {
    if(value && typeof value === 'string') {
      return value
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s/g, '-')
    }

    return '';
  }, [])

  React.useEffect(() => {
    const subscription = watch((value, {name}) => {
      if(name == 'title') {
        setValue('slug', slugTransform(value.title, {shouldValidate: true}))
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap"
    >
      {/* LEFT SIDE */}
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />

        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue(
              "slug",
              slugTransform(e.currentTarget.value),
              { shouldValidate: true }
            );
          }}
        />

        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div className="w-full mb-4">
            <img
              src={service.getFilePreview(
                post.featureImage
              )}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm