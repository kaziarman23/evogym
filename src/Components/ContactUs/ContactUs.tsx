import { SelectedPage } from "../../Shared/Types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactUsPagegraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "../../Shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `w-full rounded-lg bg-primary-300 mb-5 px-5 py-3 placeholder-white`;
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (event: any) => {
        const isValid = await trigger();
        if (!isValid) {
            event.preventDefault();
        }
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-14 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* Header */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-300">JOIN NOW</span> TO
                        GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in
                        feugiat nisl sapien vel rhoncus. Placerat at in enim
                        pellentesque. Nulla adipiscing leo egestas nisi elit
                        risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>
                {/* from and img */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <form
                            action="https://formsubmit.co/tyler.handful839@simplelogin.com"
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                        >
                            <input
                                type="text"
                                className={inputStyles}
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 20,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" &&
                                        "This field is required."}
                                    {errors.name.type === "maxLength" &&
                                        "Max Length is 20."}
                                </p>
                            )}
                            <input
                                type="text"
                                className={inputStyles}
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    maxLength: 20,
                                    pattern:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" &&
                                        "This field is required."}
                                    {errors.email.type === "pattern" &&
                                        "invalid email."}
                                </p>
                            )}
                            <textarea
                                rows={4}
                                cols={50}
                                className={inputStyles}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 800,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" &&
                                        "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max Length is 800."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img
                                src={contactUsPagegraphic}
                                className="w-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
