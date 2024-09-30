import { AxiosResponse } from "axios";
import { http } from "./http-service";

export async function findUserById(id:string): Promise<AxiosResponse<any>> {
  try {
    const response = await http.get<any>(
      "http://10.0.2.2:5000/user/"+id
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function findMbtiByName(name:string): Promise<AxiosResponse<any>> {
  try {
    const response = await http.get<any>(
      "http://10.0.2.2:5000/mbti/"+name
    );
    return response;
  } catch (error) {
    throw error;
  }
}


export async function createUserById(id:string): Promise<AxiosResponse<any>> {
    try {
      const response = await http.post<any>(
        "http://10.0.2.2:5000/register",{user_id:id}
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

export async function findAllBook(): Promise<AxiosResponse<any>> {
    try {
      const response = await http.get<any>(
        "http://10.0.2.2:5000/book"
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function findTop10(): Promise<AxiosResponse<any>> {
    try {
      const response = await http.get<any>(
        "http://10.0.2.2:5000/book/top10"
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

export async function findBookByName(title:string): Promise<AxiosResponse<any>> {
    try {
      const response = await http.get<any>(
        "http://10.0.2.2:5000/book/"+title
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  
  export async function updateResultScore(user_id:string,score:any,type:string): Promise<AxiosResponse<any>> {
    try {
      const response = await http.post<any>(
        "http://10.0.2.2:5000/update/score",{user_id:user_id,score:score,type:type}
      );
      return response;
    } catch (error) {
      throw error;
    }
  }


  export async function updateFavoriteBook(user_id:string,book_name:string): Promise<AxiosResponse<any>> {
    try {
      const response = await http.post<any>(
        "http://10.0.2.2:5000/update/favorite",{user_id:user_id,book_name:book_name}
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
