/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogOverlay,
} from "@/components/ui/dialog"

interface DialogProps{
    title: string,
    body: any,
    isOpen: boolean;
    onClose: () => void;

}
const DialogDemo = ({title, body, isOpen, onClose }: DialogProps) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay />
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
             {body}
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
