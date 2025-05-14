$(document).ready(function() {
  $('#addTask').click(function() {
    const taskText = $('#taskInput').val().trim();
    if (taskText) {
      $('#taskList').append(
        `<li>${taskText} <button class="removeTask">حذف</button></li>`
      );
      $('#taskInput').val('');
    }
  });

  $('#taskList').on('click', '.removeTask', function() {
    $(this).parent().fadeOut(300, function() {
      $(this).remove();
    });
  });

  $('#taskInput').keypress(function(e) {
    if (e.which === 13) {
      $('#addTask').click();
    }
  });
});
