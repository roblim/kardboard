def due_date(date_time)
  if date_time.strftime("%H%M") == "0000"
    date_time.strftime("%b %-d, %Y")
  else
    date_time.strftime("%b %-d, %Y at %l:%M %p")
  end
end

json.id card.id
json.title card.title
json.description card.description
json.dueDate due_date(card.due_date) if card.due_date
json.listId card.list_id
