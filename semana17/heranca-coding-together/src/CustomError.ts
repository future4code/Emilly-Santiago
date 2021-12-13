export class CustomError extends Error{
  statusCode: number

  constructor(
    statusCode: number,
    message?: string
  ){
    super(message)

    this.statusCode = statusCode
  }

}

const error = new CustomError(500)