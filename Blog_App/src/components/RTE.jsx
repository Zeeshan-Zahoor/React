import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || 'content'}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='nln9l48ifv6yes3wcg50nu5kqtsv6qn0uahx1jsp7041puou'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                                "table"
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignteft atigncenter bold italic forecolor | alignteft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help", content_style: "body { font—family:Helvetica,Arial, sans—serif; font-size: 14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />

        </div>
    )
}

