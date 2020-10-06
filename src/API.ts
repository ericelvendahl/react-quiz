export enum Difficulty {
    EASY = "east",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficult=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data);
}