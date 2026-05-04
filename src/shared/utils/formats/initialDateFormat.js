import dayjs from "@/shared/utils/dayjs-ru";
import { DATE_FORMAT } from "../constants";

export const initialDateFormat = (date) => {
  return date ? dayjs(date).format(DATE_FORMAT) : "";
};
