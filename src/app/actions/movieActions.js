import axios from 'axios'
import {ActionTypes} from '../ActionTypes'

// api isteği yaparken gönderilecek..
const options = {

  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2NhYzUwZjU1ZmFiN2YzZjUyYmJkODg1ZTU5NmM1MCIsInN1YiI6IjY0OGEzYjcwZDA1YTAzMDBlMjRlYjEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kQN5pzalTZBJsqaTDm4FsnHUOx14d0CNmkvl5Vq5JZQ'
  }
};




//axiosun davranışını belirleme
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


// asenkron aksiyon fonksiyonunu oluşturma


export const getMovies =() => (dispatch) => {
  //store aktarmadan yapılan islemler..
 

  // asenkron işlemleri yapılıyor...
axios.get("/movie/popular",options)
//apiden gelen veriyi reducera aktarmak
.then((res) =>
dispatch({
  type: ActionTypes.SET_MOVIES,
  payload: res.data.results,
})


)

  

}
//kategori verilerini almak icin aksiyon
export const getGenres = () =>  (dispatch) => {
  //kategori verisini çekme isteği
  axios.get ("/genre/movie/list",options)
  //veriyi store 'a aktar
  .then((res)=> 
  dispatch({
    type:ActionTypes.SET_GENRES,
    payload:res.data.genres,
  })
  )
}

//custom hook
export const fetchByUrl = async (URL) => {
  const res = await axios.get(URL, options);

  return res.data;
}