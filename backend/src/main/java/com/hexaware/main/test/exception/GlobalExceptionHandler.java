package com.hexaware.main.test.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
@ExceptionHandler(ResorceNotFoundException.class)
public ResponseEntity<String> handleResourseNotFound(ResorceNotFoundException ex){
	return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
}
@ExceptionHandler(TeamNotFoundException.class)
public ResponseEntity<String> handleTeamNotFound(TeamNotFoundException ex){
	return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
}
}
