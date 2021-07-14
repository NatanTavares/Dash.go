import { api } from "../api";
import { useQuery } from "react-query";
import { queryClient } from "../queryClient";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type getUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUser(userId: string): Promise<User> {
  const { data } = await api.get(`users/${userId}`);

  const user = {
    id: data.user.id,
    name: data.user.name,
    email: data.user.email,
    createdAt: new Date(data.user.createdAt).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  return user;
}

export async function getUsers(page: number): Promise<getUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return { users, totalCount };
}

export async function onPrefetchUser(userId: string) {
  return queryClient.prefetchQuery(["user", userId], () => getUser(userId), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
