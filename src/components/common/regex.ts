export const REGEXP_NAME: RegExp = /^[A-Za-z\-'\s]{3,}$/;
export const REGEXP_MESSAGE: RegExp = /^(?!(.*\b(?:SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|TRUNCATE)\b.*|\b(?:SCRIPT|ONCLICK|ONLOAD|ONSUBMIT)\b.*))(?!(?=.*['";&|])).*/gm;
