"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { common, createLowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from '@tiptap/extension-heading'
import Blockquote from '@tiptap/extension-blockquote'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import Gapcursor from '@tiptap/extension-gapcursor'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
// import css from "highlight.js/lib/languages/css";
// import js from "highlight.js/lib/languages/javascript";
// import ts from "highlight.js/lib/languages/typescript";
// import html from "highlight.js/lib/languages/xml";
const Tiptap = ({ onChange, content }: any) => {
  const lowlight = createLowlight(common);
  // lowlight.register("html", html);
  // lowlight.register("css", css);
  // lowlight.register("js", js);
  // lowlight.register("ts", ts);
  
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "Editor"
      }
    },
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Text,
      Underline,
      Document,
      Paragraph,
      Heading,
      Blockquote,
      Image.configure({
        allowBase64: true,
        inline: true,
        HTMLAttributes: {
          // class: 'my-custom-class',
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],

      }),
      Gapcursor,
      HorizontalRule,
      Placeholder.configure({
        placeholder: 'Write something …',
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      TextStyle, Color, FontFamily, Highlight.configure({ multicolor: true }),
      Subscript, Superscript,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
