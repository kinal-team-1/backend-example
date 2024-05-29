// UserAlreadyExist
export class UserAlreadyExist extends Error {
  constructor(message) {
    super(message);
    this.name = "UserAlreadyExist";
  }
}

// UserNotFound
export class UserNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotFound";
  }
}

// UserNotAuthenticated
export class UserNotAuthenticated extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotAuthenticated";
  }
}

// UserNotAuthorized
export class UserNotAuthorized extends Error {
  constructor(message) {
    super(message);
    this.name = "UserNotAuthorized";
  }
}

// UserValidationError
