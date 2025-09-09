# 📋 Simple Quiz App – React Specification

## 🎯 Goal

A simple quiz application where a user can answer multiple-choice questions, get immediate feedback, and see their score at the end.

---

## 🏗 Components

### 1. **App**

* **Role**: Root component. Holds the main state and coordinates flow.
* **State**:

  * `questions` (array) – list of quiz questions and options.
  * `currentQuestionIndex` (number) – index of the current question.
  * `score` (number) – number of correct answers so far.
  * `showResults` (boolean) – whether to show the final results screen.
* **Responsibilities**:

  * Initialize the quiz data.
  * Pass current question and callbacks down to children.
  * Handle moving to next question or showing results.

---

### 2. **QuestionCard**

* **Props**:

  * `question` (object) – question text, options, and correct answer.
  * `onAnswer` (function) – callback to pass selected answer back to `App`.
* **State** (internal, local only):

  * `selectedOption` (string or null) – which option the user has clicked.
  * `isAnswered` (boolean) – whether the user has submitted an answer.
* **Responsibilities**:

  * Display current question and its options.
  * Handle option selection.
  * Call `onAnswer(selectedOption)` when the user submits.
  * Provide feedback (e.g., highlight correct/wrong answers).

---

### 3. **OptionButton**

* **Props**:

  * `text` (string) – the option text.
  * `isSelected` (boolean) – whether this option is currently selected.
  * `isCorrect` (boolean, optional) – whether this option is the correct answer (only revealed after submit).
  * `onClick` (function) – event handler when option is clicked.
* **State**: None (stateless).
* **Responsibilities**:

  * Render a clickable button for an answer option.
  * Show different styles depending on selection and correctness.

---

### 4. **ResultsScreen**

* **Props**:

  * `score` (number) – final score.
  * `total` (number) – total number of questions.
  * `onRestart` (function) – callback to restart quiz.
* **State**: None (stateless).
* **Responsibilities**:

  * Show final results and percentage.
  * Provide a "Restart Quiz" button.

---

### 5. **ProgressBar** *(optional)*

* **Props**:

  * `current` (number) – current question index.
  * `total` (number) – total number of questions.
* **State**: None (stateless).
* **Responsibilities**:

  * Display progress (e.g., "Question 2 of 5").
  * Could also render a visual progress bar.

---

## 🔗 Component Relationships

```
App
 ├── ProgressBar (optional)
 ├── QuestionCard
 │     └── OptionButton (multiple)
 └── ResultsScreen
```

* **App** decides whether to show `QuestionCard` or `ResultsScreen`.
* **QuestionCard** handles per-question logic, but `App` manages the overall quiz flow.
* **OptionButton** is a pure presentational component.

---

## 🗄 Example State Shape

```js
questions = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars"
  }
]
```

---

## ▶️ Flow

1. App loads `questions`.
2. Renders **QuestionCard** with the first question.
3. User selects an option → stored in `QuestionCard` local state.
4. On submit:

   * `QuestionCard` calls `App.onAnswer(selectedOption)`.
   * App updates `score` if correct.
   * App increments `currentQuestionIndex`.
5. If more questions → render next `QuestionCard`.
   If no more → render **ResultsScreen**.
6. ResultsScreen shows final `score` and allows restart (resetting state).

