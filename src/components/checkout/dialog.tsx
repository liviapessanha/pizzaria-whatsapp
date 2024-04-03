import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { chekoutSteps } from "@/types/checkout-steps";
import { Progress } from "@/components/ui/progress";
import { StepUser } from "@/components/checkout/step-user";
import { StepFinish } from "@/components/checkout/step-finish";
import { StepAddress } from "@/components/checkout/step-address";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({open, onOpenChange}: Props) => {
    const [step, setStep] = useState<chekoutSteps>('user');

    let progressPorcentagem = 0;

    switch(step) {
        case 'user':
            progressPorcentagem = 30;
        break;
        case 'address':
            progressPorcentagem = 70;
        break;
        case 'finish':
            progressPorcentagem = 100;
        break;
    }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {step === 'user' && 'Dados Pessoais'} 
                    {step === 'address' && 'Endereço de entrega'} 
                    {step === 'finish' && 'Enviar para o WhatsApp'} 
                </DialogTitle>
            </DialogHeader>

            <Progress value={progressPorcentagem} />
            <div className="flex flex-col gap-3">
                {step === 'user' && <StepUser setStep={setStep} />}
                {step === 'address' && <StepAddress setStep={setStep} />}
                {step === 'finish' && <StepFinish />}
            </div>
        </DialogContent>
</Dialog>

  )
}