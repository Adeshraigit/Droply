"use client"
import { useForm } from "react-hook-form"
import { useSignUp } from "@clerk/nextjs"
import { z } from "zod"
import { signUpSchema } from "@/schema/signUpSchema"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { fa } from "zod/v4/locales"

export default function SignUpForm() {
    const router = useRouter();
    const [verifying, setVerifying] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);
    const [verificationError, setVerificationError] = useState<string | null>(null);
    const [verificationCode, setVerificationCode] = useState("")

    const { signUp, isLoaded, setActive } = useSignUp()

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirmation: "",
        }
    });

    const onSubmit = async (data : z.infer<typeof signUpSchema>) => {
        if(!isLoaded) return;
        setIsSubmitting(true);
        setAuthError(null);
        try {
            await signUp.create({
                emailAddress: data.email,
                password: data.password
            })
            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code'
            })
            setVerifying(true);
        } catch (error: any) {
            console.error("Signup error", error);
            setAuthError(
                error.errors?.[0]?.message || "An error occured during the signup. please try again"
            )
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleVerification = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!isLoaded || !signUp ) return;
        setIsSubmitting(true);
        setAuthError(null); 

        try {
            const result = await signUp.attemptEmailAddressVerification({
                code: verificationCode
            });
            // todo: console the result
            if(result.status === "complete"){
                await setActive({session: result.createdSessionId})
                router.push("/dashboard");
            } else {
                console.error("Verification Incomplete", result);
                setVerificationError(
                    "Verification could not be completed"
                )
            }
        } catch (error: any) {
            console.error("Verification Incomplete", error);
            setVerificationError(
                error.errors?.[0]?.message || "An error occured during the signup. plase try again"
            )
        } finally {
            setIsSubmitting(false)
        }
    };

    if(verifying){
        return (<h1>
            OTP
        </h1>
        )
    }

    return (
        <h1>SignUp Form with email and other fields</h1>
    )
}