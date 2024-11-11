import { Button, Input, Image } from "@nextui-org/react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"

const LoginPage = () => {

    const [PassVisible, SetIsPassVisible] = useState(false)

    const togglePass = () => !SetIsPassVisible(!PassVisible)

    return (
        <>
            <div className="flex">

                <div className="w-full hidden md:block">
                    <Image
                        className="h-screen "
                        src="/image/login_bg.jpg"
                    />
                </div>
                <div className="w-full flex flex-col items-center p-12 space-y-24">
                    <div className="space-y-8 text-center">
                        <p className="text-4xl font-bold">Login</p>
                        <p>Welcome To Smart Home</p>
                    </div>

                    <div className="space-y-12 w-full md:px-24">

                        <Input
                            type="email"
                            label="Email"
                            labelPlacement="outside"
                            startContent={
                                <Icon icon="ic:baseline-email" />
                            }
                        />


                        <div className="space-y-4">

                            <Input
                                type={PassVisible ? "text" : "password"}
                                label="Password"
                                labelPlacement="outside"
                                startContent={
                                    <Icon icon="mdi:password" />
                                }
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={togglePass} >
                                        {PassVisible ? (
                                            <Icon icon="formkit:eyeclosed" />
                                        ) : (
                                            <Icon icon="mdi:eye" />
                                        )}
                                    </button>
                                }

                            />
                            <Button size="sm" variant="light"className="text-xs opacity-50">
                                <a href="/">
                                    Create Account
                                </a>
                            </Button>
                        </div>

                        <Button color="primary" radius="full" className={"w-full"}>Login</Button>

                    </div>

                </div>



            </div>

        </>
    )
}

export default LoginPage