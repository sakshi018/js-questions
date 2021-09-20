function nextRightSibling(root, target) {
  
    const queue = []
    queue.push(root)
    while (queue.length) {
      const current = queue.shift()
      if (current !== target) {
        if (current.children)
          queue.push(...current.children)
      }
      else {
       return  queue.length ? queue[0] : null
      }
      
    }
    return null
    
  }