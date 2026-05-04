import dayjs from "@/shared/utils/dayjs-ru";

export const FF_LOGIN = () => ({
  email: "",
  password: "",
});

export const FF_PRIZE = () => ({
  name: "",
  quantity: "",
  probability_percentage: "",
  cashback_percentage: "",
  org_sn: "",
  receipt_min_sum: "",
  start_at: [
    dayjs().format("YYYY-MM-DDT00:00:00"),
    dayjs().add(1, "day").format("YYYY-MM-DDT23:59:59"),
  ],
  end_at: "",
  img: [],
  type: "prize",
});

export const FF_REPORT_DOWNLOAD = () => ({
  ext: "xlsx",
  org_sn: "",
  typeReport: "",
  start_at: dayjs().format("YYYY-MM-DDT00:00:00"),
  end_at: dayjs().format("YYYY-MM-DDT23:59:59"),
  play_result: undefined,
  win_type: undefined,
});

export const FF_REPORT_ALL_PARAMS = () => ({
  typeReport: "",
  ext: "xlsx",
  org_sn: undefined,
  start_at: undefined,
  end_at: undefined,
  play_result: undefined,
  win_type: undefined,
});

export const FF_REPORT_DAILY_PARAMS = () => ({
  org_sn: undefined,
  start_at: undefined,
  end_at: undefined,
});

export const FF_CATEGORY_NOTIFICATION = () => ({
  name_ru: "",
  name_kz: "",
  toggleable: true,
  img: [],
});
