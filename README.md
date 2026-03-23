Prompt 2: Intent and Logic Explanation

High-Level Intent:

Rank tasks based on urgency/importance so the CLI can display or sort them effectively.

Step-by-Step Logic:

Start with task.priority * 10 as the base score.
Adjust for due date:
If overdue: add 50 points.
Otherwise: add (30 - days_left), minimum 0.
Add 5 points per tag.
Return final score.

Assumptions & Edge Cases:

Priority must be an integer in range 1–4.
Due date must be datetime.date or None.
Tags are optional; missing tags do not affect score.
Overdue tasks get a flat bonus regardless of how overdue.

Potential Improvements:

Parameterize weight constants for flexibility.
Add validation for priority range.
Handle timezone-aware due dates.

Which parts of the documentation were most challenging for the AI**

* **Context for attributes:** The AI initially struggled to fully explain the `task` object because the class definition wasn’t included. For example, knowing that `priority` is 1–4, `tags` is a list, and `due_date` is a `datetime.date` object had to be provided explicitly. Without that, AI could give vague or incorrect types.
* **Edge cases and assumptions:** AI sometimes missed subtleties like what happens if a task has no due date or is overdue by months. These required manual clarification.
* **Business logic rationale:** Explaining *why* overdue tasks get a fixed 50-point boost, or why each tag adds 5 points, was not obvious to AI without guidance. The intent and logic required extra prompting to connect constants to their meaning.
* **Potential improvements:** Suggesting parameterization of constants or validation checks required explicit prompting about flexibility and robustness.

Additional information needed to provide in prompts**

* **Attribute types and ranges:** Priority scale, expected type of `due_date`, and `tags`.
* **Function role in workflow:** That it’s used by the CLI to rank tasks for listing, sorting, or highlighting urgent items.
* **Business rules:** For example, overdue tasks get a 50-point boost, each tag increases the score by 5.
* **Expected behavior for edge cases:** No due date, zero tags, overdue tasks, or invalid priority values.
* **Context of usage:** Indicating that this function is part of the CLI Task Manager, not a standalone utility.

Providing this information made the AI’s documentation more accurate, complete, and useful for developers.

 How I would use this approach in my own projects**

* **Quickly generate developer-ready documentation:** I can paste a function and use AI to produce a full docstring or JSDoc including parameters, return types, examples, and notes.
* **Combine docstring with intent/logic explanation:** The AI can give both structured docstring (Prompt 1) and plain-language reasoning (Prompt 2), which helps onboard new team members.
* **Review and improve legacy code:** For older code without documentation, this approach allows creating consistent documentation and identifying edge cases or assumptions.
* **Plan refactoring:** By highlighting constants, assumptions, and potential improvements, AI helps identify parts that could be parameterized, tested, or made more robust.
* **Team collaboration:** Generated documentation can be shared with teammates, providing a baseline that everyone can review and refine.

 I’d use this approach for any project where functions interact with complex objects, have multiple steps or business rules, and need clear, reusable documentation for future developers.

