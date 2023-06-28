import { useRef, useState } from "react";
import ChatTrigger from "./chatTrigger";
import ChatWindow from "./chatWindow";

export default function ChatWidget({ trigger }: { trigger?: React.CSSProperties }) {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    return (
        <div>
            <ChatTrigger triggerRef={triggerRef} open={open} setOpen={setOpen} style={trigger} />
            {open && <ChatWindow triggerRef={triggerRef} position="top-right"/>}
        </div>
    )
}
