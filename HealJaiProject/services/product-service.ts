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
  