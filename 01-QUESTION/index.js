
	/*****  Q. Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];If it exists  add some code to find the index of geekster and remove that item ******/

    var arr=['geek', 'geekster', 'geeky']

    for (let index = 0; index < arr.length; index++) {
        
        if(arr[index]=='geekster'){
            console.log(index)
            arr.splice(index,1)
              console.log(arr)  
        }
        
    }

    