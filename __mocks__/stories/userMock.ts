import type { CustomerAccount, CustomerAuthTicket } from '@/lib/gql/types'

export const userResponseMock: CustomerAccount = {
  id: 1012,
  userId: '3e69cbd5f3694a76916e64451cb76968',
  firstName: 'Suman',
  lastName: 'Patro',
  emailAddress: 'suman@email.com',
  userName: 'suman@email.com',
  isAnonymous: false,
}
export const userMock: { customerAccount: CustomerAccount } = {
  customerAccount: userResponseMock,
}

export const loginUserResponseMock: CustomerAuthTicket = {
  ...userMock,
  accessToken:
    'S8k9/qdTXi9359KfnklVehBSuqodqI1buEQ6io903z3yTsfvc9MMqimS8tGbPJn4BLyp/gUaHkvBv8t274I2huPDiw8wIyaxJN0yYOcPMZu2+AviCGnbTYP9FbeWH3NRvf4qngUHx2BYK+j0xbbEcHZ4T7XrfTO/yufenpDGMkVLUxWo+LUrho/dNd3QcLZalZwo8yyZEFx4VH/NU4DcKlMFVrOcTyhk0y9K87IvrmvnD4jxFaJbLn+3og9q1bayn1hG7nwC2XU5OWJWaMwSnF96T4kUqRpqFF2N2SmOiDJHawJl+sKLHn2ZYpPNKEmWyiDEbBi+S9x//6zdT5GCRRAUBT0iXXgN7KdR/epxfaEY372HUxCLUYn/4BQRggGJ7PdA4z+dYrfAA59gVYH2G3/bKzmt8zPvFitgTGKJh/zl0mzMyx8yJoAz/STpoQUn',
  accessTokenExpiration: 1655298784785,
  refreshToken: 'c679d7ce7fbe4c4f94f2355c767f0337',
  refreshTokenExpiration: 1655384284785,
  userId: '3e69cbd5f3694a76916e64451cb76968',
  jwtAccessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3d3dy5raWJvY29tbWVyY2UuY29tL2FwcF9jbGFpbXMiOnsic3NsIjoiMCIsImVudCI6IjAiLCJtdHIiOiIwIiwidWMiOiIwIiwicm5kIjo1NjQzNjg0MzUsImFpZCI6IjMzNjllM2ViNWYwMDQ0NWQ5OWNiYjQxMzg2NTdkN2MwIiwiYWtleSI6Im1venVhZG1pbi5tcG9jX2FwcC4xLjAuMC5SZWxlYXNlIiwiYnYiOlsyLDEwNDAyNTI4NjIsNywxMzQyMTc3MjcsNiwtNjg3ODUzNTM4LDUsMjY4NDE4MzAzLDAsNTIxMDkxODcwLDMsNTI4MjM2MDMyLDEsMjA3ODk0ODg5NF0sImV4cCI6IjIwMjItMDYtMTVUMTM6MzA6MzEiLCJlbnYiOiJkZXYxMCIsImIuQXBwTmFtZSI6Im1wb2NfYXBwIn0sImh0dHBzOi8vd3d3LmtpYm9jb21tZXJjZS5jb20vdXNlcl9jbGFpbXMiOnsicm5kIjoxMjQzMTY5NjUsImFub24iOiIwIiwidWlkIjoiM2U2OWNiZDVmMzY5NGE3NjkxNmU2NDQ1MWNiNzY5NjgiLCJidiI6WzMxLDQxOTQzMDRdLCJlbnYiOiJkZXYxMCIsImV4cCI6IjIwMjItMDYtMTVUMTM6MTM6MDQiLCJzdCI6IlNob3BwZXIiLCJiLkFjY291bnRJZCI6IjEwNzQiLCJiLlNpdGVJZCI6IjIyMTE2IiwiYi5fc2Vzc18iOiJ7XCJpXCI6XCI4NTM1ZTNmYTc1NzM0NTBiOWM3YzRjZTFmOGYzMzUxZlwiLFwicFwiOmZhbHNlLFwicDJcIjpudWxsLFwiYnRcIjpmYWxzZSxcImNcIjpcIjIwMjItMDYtMTVUMTI6NTg6MDQuMzQxODM1WlwiLFwiZVwiOlwiMjAyMi0wNi0xNVQxMjo1ODowNC4zNDE4MzVaXCJ9IiwiYi5UZW5hbnRJZCI6IjE3ODI4IiwiYi5QcmV2aW91c0Fub255bW91c0lkIjoiNThkY2UxZjc2OGIyNDJkYzhhZThiOTM1NGU4Y2NjZTciLCJiLlVzZXJGaXJzdE5hbWUiOiJTdW1hbiIsImIuVXNlckxhc3ROYW1lIjoiUGF0cm8ifSwidW5pcXVlX25hbWUiOiIzZTY5Y2JkNWYzNjk0YTc2OTE2ZTY0NDUxY2I3Njk2OCIsInN1YiI6IjNlNjljYmQ1ZjM2OTRhNzY5MTZlNjQ0NTFjYjc2OTY4Iiwic2lkIjoiODUzNWUzZmE3NTczNDUwYjljN2M0Y2UxZjhmMzM1MWYiLCJuYmYiOjE2NTUyOTc4ODQsImV4cCI6MTY1NTI5OTgzMSwiaWF0IjoxNjU1Mjk3ODg0LCJpc3MiOiJodHRwczovL3d3dy5raWJvY29tbWVyY2UuY29tIiwiYXVkIjoiaHR0cHM6Ly93d3cua2lib2NvbW1lcmNlLmNvbSJ9.EiC8OIYO8T2IWqCiMcMlAsnG6ylENY8NOZO0ixqaAoM',
}
export const loginUserMock: { account: CustomerAuthTicket } = {
  account: loginUserResponseMock,
}
export const registerUserResponseMock: CustomerAuthTicket = {
  customerAccount: {
    emailAddress: 'sukanta@email.com',
    userName: 'sukanta@email.com',
    firstName: 'Sunil',
    lastName: 'Tall',
    localeCode: null,
    id: 1141,
    userId: '5ec2caaa02bb482795b16d60c374d2c3',
    isAnonymous: false,
    attributes: [],
  },
  userId: '5ec2caaa02bb482795b16d60c374d2c3',
  accessToken:
    'jtOr4T5McDtAjIjGxZAN8URfcuKzh+WHTmEWZxpD6nOd2Kj0oyWPyayd5nE0CFWJn0knLl6y26BJzp3QPhMC0NlBVJ7bfjb+Fq2cSXBoxS/IFmDwPl0qEuUwLPhtCb9xnFpusAiXCXlUD72veL+BaVALG497OT2aRfqeUlrYtFYlAw8LtBxJLRVGhbQdDnwmX7Wu4DoaCdH6dzupX6tNUR6Gvlqy/Vk3RMsxm4O/ihmBArqnUz0m0OdJK2SO2Op0uaSwczuo+39IrKxCwqb/3zHiT8ryWPMnE/K5JS05KSP1J9FNBT7Bi3YFWv0VtRZnZCJm+o2CeqURaxsFGuYKrUlDMn8VFEL3WwlwzcVzFwNabFC6RyY3WnBabxwv+nFEK8Lt5OaO0jTNusICRGRXU9GEjoAAvlUbX0oSDOCotekzoho7JIl3HrjIY/F1qoctDd0F1us+pq5rDhXFv8SZ2Q==',
  accessTokenExpiration: 1656345757987,
  refreshToken: 'cf20cb211b0a458aabbb9916ba3df6f9',
  refreshTokenExpiration: 1656431257987,
  jwtAccessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3d3dy5raWJvY29tbWVyY2UuY29tL2FwcF9jbGFpbXMiOnsic3NsIjoiMCIsImVudCI6IjAiLCJtdHIiOiIwIiwidWMiOiIwIiwicm5kIjoyNjEyMjYzMDgsImFpZCI6IjMzNjllM2ViNWYwMDQ0NWQ5OWNiYjQxMzg2NTdkN2MwIiwiYWtleSI6Im1venVhZG1pbi5tcG9jX2FwcC4xLjAuMC5SZWxlYXNlIiwiYnYiOlsyLDEwNDAyNTI4NjIsNywxMzQyMTc3MjcsNiwtNjg3ODUzNTM4LDUsMjY4NDE4MzAzLDAsNTIxMDkxODcwLDMsNTI4MjM2MDMyLDEsMjA3ODk0ODg5NF0sImV4cCI6IjIwMjItMDYtMjdUMTY6Mzc6MzIiLCJlbnYiOiJkZXYxMCIsImIuQXBwTmFtZSI6Im1wb2NfYXBwIn0sImh0dHBzOi8vd3d3LmtpYm9jb21tZXJjZS5jb20vdXNlcl9jbGFpbXMiOnsicm5kIjoxMzU3NzM4NjgxLCJhbm9uIjoiMCIsInVpZCI6IjVlYzJjYWFhMDJiYjQ4Mjc5NWIxNmQ2MGMzNzRkMmMzIiwiYnYiOlszMSw0MTk0MzA0XSwiZW52IjoiZGV2MTAiLCJleHAiOiIyMDIyLTA2LTI3VDE2OjAyOjM3Iiwic3QiOiJTaG9wcGVyIiwiYi5TaXRlSWQiOiIyMjExNiIsImIuQWNjb3VudElkIjoiMTE0MSIsImIuVGVuYW50SWQiOiIxNzgyOCIsImIuX3Nlc3NfIjoie1wiaVwiOlwiZTRkMzM1MzVjZTc4NDU0NWIzNDMwMDQzNDE5Y2I4YzNcIixcInBcIjpmYWxzZSxcInAyXCI6bnVsbCxcImJ0XCI6ZmFsc2UsXCJjXCI6XCIyMDIyLTA2LTI3VDE1OjQ3OjM3LjQwNTkyMTZaXCIsXCJlXCI6XCIyMDIyLTA2LTI3VDE1OjQ3OjM3LjQwNTkyMTZaXCJ9IiwiYi5Vc2VyTGFzdE5hbWUiOiJUYWxsIiwiYi5Vc2VyRmlyc3ROYW1lIjoiU3VuaWwiLCJiLlByZXZpb3VzQW5vbnltb3VzSWQiOiJhNzFjY2NmNDU1YzY0MTI0YjRhYjQ2YmFiOWMzMjAyOCJ9LCJ1bmlxdWVfbmFtZSI6IjVlYzJjYWFhMDJiYjQ4Mjc5NWIxNmQ2MGMzNzRkMmMzIiwic3ViIjoiNWVjMmNhYWEwMmJiNDgyNzk1YjE2ZDYwYzM3NGQyYzMiLCJzaWQiOiJlNGQzMzUzNWNlNzg0NTQ1YjM0MzAwNDM0MTljYjhjMyIsIm5iZiI6MTY1NjM0NDg1NywiZXhwIjoxNjU2MzQ3ODUyLCJpYXQiOjE2NTYzNDQ4NTcsImlzcyI6Imh0dHBzOi8vd3d3LmtpYm9jb21tZXJjZS5jb20iLCJhdWQiOiJodHRwczovL3d3dy5raWJvY29tbWVyY2UuY29tIn0.BC-ZBu3-AlaGc7Zx7sNQJIUmhoCrCS5PbZabL6ZUAm4',
}

export const registerUserMock: { account: CustomerAuthTicket } = {
  account: registerUserResponseMock,
}
