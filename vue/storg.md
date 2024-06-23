# برای اینکه در اول کار ببینیم عضو شده یا نه
```js
onstart(state){

      let token = localStorage.getItem('token')

      if(token){

        state.isAuthen = true

        state.token = token

      }else{

        state.isAuthen = false

        state.token = ''

      }

    },
```
# برای loginform
```js
login_page(state,token){

    if(token){

      state.isAuthen = true

      state.token = token

      localStorage.setItem('token',token)

    }else{

      state.isAuthen = false

      state.token = ''

      localStorage.removeItem('token')

    }

  }
```
# برای logut
```js
logut(state){

    state.isAuthen = false

    state.token = ''

    localStorage.removeItem('token')

  }
```