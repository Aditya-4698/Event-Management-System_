#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
f=cgi.FieldStorage()
print(f.getvalue("SId"))
print(f.getvalue("mode"))
print(f.getvalue("categname"))    
print(f.getvalue("description"))