/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable sonarjs/no-identical-functions */
import { capitalize, startCase } from "lodash";

export const trUc = ({ t, key, data = {} }: any) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? t(`${item}`, data) : ` ${t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText
      ? `${startCase(text)} ${data?.extraText}`
      : startCase(text);
  } catch (err) {
    return err?.toString();
  }
};

export const trUp = ({ t, key, data = {} }: any) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? t(`${item}`, data) : ` ${t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText
      ? `${text.toUpperCase()} ${data?.extraText}`
      : text.toUpperCase();
  } catch (err) {
    return err?.toString();
  }
};

export const trLw = ({ t, key, data = {} }: any) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? t(`${item}`, data) : ` ${t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText
      ? `${text.toLowerCase()} ${data?.extraText}`
      : text.toLowerCase();
  } catch (err) {
    return err?.toString();
  }
};

export const trFirst = ({ t, key, data = {} }: any) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? t(`${item}`, data) : ` ${t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText
      ? `${capitalize(text)} ${data?.extraText}`
      : capitalize(text);
  } catch (err) {
    return err?.toString();
  }
};
