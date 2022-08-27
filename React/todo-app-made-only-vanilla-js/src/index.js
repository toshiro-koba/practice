const deleteFromIncompleteList = target => {
  target.addEventListener('click', () => {
    const deleteTarget = target.parentNode

    document.getElementById('incomplete-list').removeChild(deleteTarget)
  })
}

const createIncompleteTask = text => {
  const div = document.createElement('div')
  div.className = 'list-row'

  const li = document.createElement('li')
  li.innerText = text


  const completeBtn = document.createElement('button')
  completeBtn.innerText = '完了'
  deleteFromIncompleteList(completeBtn)
  completeBtn.addEventListener('click', () => {
    const addTarget = completeBtn.parentNode
    const text = addTarget.firstElementChild.innerText

    addTarget.textContent = null
    const li = document.createElement('li')
    li.innerText = text
    const backBtn = document.createElement('button')
    backBtn.addEventListener('click', () => {
      const deleteTarget = backBtn.parentNode

      document.getElementById('complete-list').removeChild(deleteTarget)

      const text = backBtn.parentNode.firstElementChild.innerText
      createIncompleteTask(text)
    })
    backBtn.innerText = '戻す'
    addTarget.appendChild(li)
    addTarget.appendChild(backBtn)

    document.getElementById('complete-list').appendChild(addTarget)
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = '削除'
  deleteFromIncompleteList(deleteBtn)

  div.appendChild(li)
  div.appendChild(completeBtn)
  div.appendChild(deleteBtn)

  document.getElementById('incomplete-list').appendChild(div)
}

const onClickAdd = () => {
  const text = document.getElementById('add-text').value
  document.getElementById('add-text').value = ''

  createIncompleteTask(text)
}

document.getElementById('add-button').addEventListener('click', () => onClickAdd())
