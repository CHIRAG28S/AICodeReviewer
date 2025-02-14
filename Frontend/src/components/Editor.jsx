import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const Editor = ({ code, setCode }) => {
    return (
        <div className="flex-1 overflow-auto ">
            <CodeMirror
                value={code}
                extensions={[javascript()]}
                onChange={(value) => setCode(value)}
                theme={dracula}
                basicSetup={{ lineNumbers: true }}
                className="w-full h-full border border-zinc-600 rounded-lg overflow-auto text-[15px]"
            />
        </div>
    );
};

export default Editor;
