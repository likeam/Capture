export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1,
        },
    },
};

export const titleAnim ={
    hiddden: { y: 200},
    show:{ y: 0, transition: 0.75, ease: "easeOut"},
}