def calculate_task_priority_score(task):
    """
    Calculates a numeric priority score for a task based on priority, due date, and tags.
    """
    import datetime
    score = task.priority * 10
    
    if task.due_date:
        days_left = (task.due_date - datetime.date.today()).days
        if days_left < 0:
            score += 50  # overdue tasks get a boost
        else:
            score += max(0, 30 - days_left)
    
    if hasattr(task, 'tags') and task.tags:
        score += 5 * len(task.tags)
    
    return score 

Prompt 1 Comprehensive Python Docstringdef
  calculate_task_priority_score(task):
    """
    Calculate a numeric priority score for a task.

    This function evaluates a Task object from the CLI Task Manager
    and computes a score representing its urgency and importance. 
    The score considers:
      - Priority level (1=LOW, 2=MEDIUM, 3=HIGH, 4=URGENT)
      - Due date proximity (overdue or upcoming)
      - Number of associated tags

    Parameters:
        task (Task): Task object with attributes:
            - priority (int): Task priority level
            - due_date (datetime.date or None): Due date
            - tags (list[str], optional): Tags associated with the task

    Returns:
        int: Numeric priority score. Higher numbers indicate higher urgency.

    Exceptions:
        AttributeError: If task is missing required attributes
        TypeError: If due_date is not a datetime.date object or None

    Example:
        >>> task = Task(priority=3, due_date=datetime.date(2024,1,31), tags=['bug','urgent'])
        >>> calculate_task_priority_score(task)
        56

    Notes:
        - Overdue tasks receive a 50-point boost.
        - Each tag adds 5 points to the score.
        - Tasks without due dates do not receive a due-date bonus.
        - Constants (10 for priority, 50 for overdue, 5 per tag) can be parameterized for flexibility.
    """

Final Combine Documentation
def calculate_task_priority_score(task):
    """
    Calculate a numeric priority score for a task in the CLI Task Manager.

    The function computes a score based on:
      1. Priority level (multiplied by 10)
      2. Due date proximity:
         - Overdue: +50
         - Upcoming: max(0, 30 - days_left)
      3. Tags: +5 points per tag

    Parameters:
        task (Task): A Task object with attributes:
            - priority (int): 1=LOW, 2=MEDIUM, 3=HIGH, 4=URGENT
            - due_date (datetime.date or None)
            - tags (list[str], optional)

    Returns:
        int: Numeric score representing task urgency (higher = more urgent)

    Exceptions:
        AttributeError: Missing required attributes in task
        TypeError: due_date is not datetime.date or None

    Example:
        >>> task = Task(priority=3, due_date=datetime.date(2024,1,31), tags=['bug','urgent'])
        >>> calculate_task_priority_score(task)
        56

    Notes:
        - Overdue tasks get a 50-point boost
        - Each tag adds 5 points
        - Tasks without due date do not get due-date bonus
        - Weight constants (10, 50, 5) can be customized for flexibility
    """
    import datetime
    score = task.priority * 10  # base from priority

    # Adjust score based on due date proximity
    if task.due_date:
        days_left = (task.due_date - datetime.date.today()).days
        if days_left < 0:
            score += 50  # overdue boost
        else:
            score += max(0, 30 - days_left)

    # Add score for tags
    if hasattr(task, 'tags') and task.tags:
        score += 5 * len(task.tags)

    return score

 
