import {useSubscription, gql } from "@apollo/client";

export const GET_TODOS = gql`
  subscription GetTodos {
    todos(order_by: { id: desc }) {
      id
      title
      is_completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    insert_todos_one(object: { title: $title }) {
      id
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!, $is_completed: Boolean!) {
    update_todos_by_pk(pk_columns: { id: $id }, _set: { is_completed: $is_completed }) {
      id
      is_completed
    }
  }
`;


