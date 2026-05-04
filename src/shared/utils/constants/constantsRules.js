import {
  validateApiErrorsFunc,
  validateEmail,
  validateNumber,
  validateRequired,
  validateStringLength,
  validatorsRules,
} from "../defaultRules";

export const RULES_LOGIN = {
  email: validatorsRules([validateRequired, validateEmail]),
  password: validatorsRules([validateRequired]),
};

export const RULES_PRIZE = (errosRef) => ({
  name: validatorsRules([
    validateRequired,
    validateApiErrorsFunc(errosRef, "name"),
  ]),
  quantity: validatorsRules([validateRequired]),
  probability_percentage: validatorsRules([
    validateRequired,
    validateApiErrorsFunc(errosRef, "probability_percentage"),
  ]),
  org_sn: validatorsRules(
    [validateNumber(12, 12), validateApiErrorsFunc(errosRef, "org_sn")],
    {
      required: false,
    }
  ),
  receipt_min_sum: validatorsRules([validateRequired]),
  start_at: validatorsRules([validateRequired]),
  // end_at: validatorsRules([validateRequired]),
  img: validatorsRules([validateRequired]),
});

export const RULES_REPORT_DOWNLOAD = {
  typeReport: validatorsRules([validateRequired]),
  org_sn: validatorsRules([validateStringLength(12, 12)], {
    required: false,
  }),
  ext: validatorsRules([validateRequired]),
};
