import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useDocumentData } from "react-firebase-hooks/firestore";
import FlashMessage from "react-flash-message";

import Page from "../components/Page";
import Tooltip from "../components/Tooltip";
import HabitContent from "../components/Habits/HabitContent";
import AddHabitForm from "../components/Input/Habits/AddHabitForm";
import { useHabitCategoriesRef } from "../hooks/firestoreHooks";
import Button from "../components/Button";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/router";

const useHabitCategories = () => {
    const categoriesRef = useHabitCategoriesRef();
    const [value, loading, error] = useDocumentData(categoriesRef);

    return value;
};

const Goals: React.FC = () => {
    const { uid } = useUser();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [creationMode, setCreationMode] = useState(false);
    const [submitted, setSubmitted] = useState(null);
    const categories = useHabitCategories();
    const router = useRouter();

    useEffect(() => {
        if (!uid) {
            router.push("/login");
        }
    }, []);

    useEffect(() => {
        if (categories) {
            setSelectedCategory(Object.values(categories)[0]);
        }
    }, [categories]);

    useEffect(() => {
        if (submitted !== null) {
            setTimeout(() => {
                setSubmitted(null);
            }, 5000);
        }
    }, [submitted]);

    return (
        <>
            {uid && (
                <Page title="Goals">
                    <div className="md:w-1/4">
                        <div className="mb-4 rounded-lg">
                            <h1 className="inline text-highlight font-bold">
                                Goal Tracker
                            </h1>
                            <Tooltip>
                                <p>
                                    Each day you complete your goal, mark it in
                                    the calendar, and track your progress!
                                </p>
                                <p>
                                    If you don't complete it one day, don't
                                    worry!
                                </p>
                                <p>The greener the calendar, the better!</p>
                            </Tooltip>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-highlight mr-4 inline ">
                                Your Goals
                            </h2>
                            {creationMode ? (
                                <AddHabitForm
                                    setCreationMode={setCreationMode}
                                />
                            ) : (
                                <Button
                                    text="+"
                                    textSize="lg"
                                    onClick={() => setCreationMode(true)}
                                />
                            )}

                            {categories && (
                                <Fade bottom cascade duration={500}>
                                    <div>
                                        {Object.values(categories).map(
                                            (category, idx) => {
                                                return (
                                                    <p
                                                        key={idx}
                                                        onClick={() => {
                                                            setSelectedCategory(
                                                                category
                                                            );
                                                        }}
                                                        className={`cursor-pointer p-1.5 ${
                                                            selectedCategory ==
                                                            category
                                                                ? "border-l-4 border-highlight bg-base"
                                                                : ""
                                                        } hover:bg-base`}
                                                    >
                                                        {category}
                                                    </p>
                                                );
                                            }
                                        )}
                                    </div>
                                </Fade>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col md:ml-5 md:w-2/3">
                        {selectedCategory && (
                            <>
                                <h1 className="text-xl text-highlight">
                                    Did you{" "}
                                    <span className="font-bold">
                                        {selectedCategory}
                                    </span>{" "}
                                    today?
                                </h1>
                                {submitted !== null && (
                                    // <Zoom right duration={300}>
                                    <FlashMessage duration={5000}>
                                        <p className="p-3 my-5 rounded-lg text-white bg-highlight">
                                            {submitted
                                                ? "Great job! Keep up the good work!"
                                                : "Don't worry about it! Try again tomorrow."}
                                        </p>
                                    </FlashMessage>
                                    // </Zoom>
                                )}
                                <HabitContent
                                    selectedCategory={selectedCategory}
                                    setSubmitted={setSubmitted}
                                />
                            </>
                        )}
                    </div>
                </Page>
            )}
        </>
    );
};

export default Goals;
