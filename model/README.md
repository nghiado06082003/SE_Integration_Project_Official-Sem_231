1. Module mượn sách
a. Datbase: 
	REQUESTBORROW (request Book loan) STATUS: "process" / "approve" / "deny";
b. Code:
	+ 500: DATABASE_FAILED
	+ 300: OK
c. API:
* Get loan (book borrow) list:
- Manager:
API: /api/loanManagement/manager/list
Res: 
	+ Failed:  JSON {code: 500}
	+ Successed: JSON {loanList: {"student_id": <INT>,"document_id": <INT>,"request_date": <DATE>, "status": <TEXT>,"update_date": <DATE>,}}
- User: (User request book history)
API: /api/loanMangement/customer/history?id=<INT>
Res: 
	+ Failed:  JSON {code: 500}
	+ Successed: JSON {loanHistory: {"student_id": <INT>,"document_id": <INT>,"request_date": <DATE>, "status": <TEXT>,"update_date": <DATE>,}}
* Request book:
- User:
API: /api/loanManagement/customer/request?stu_id=<INT>&book_id=<INT>
Res: 
	+ Failed:  JSON {code: 500}
	+ Successed: JSON {code: 300}