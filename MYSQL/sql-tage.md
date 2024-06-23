## start
## make table
```sql
CREATE TABLE users (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

```
## CREATE TABLE name
### ساخت جدول با نام مشخص

## id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY
### ساخت سطری با اسم Id
## int (11)
### یعنی عددی که میگیره از 11 تا رقم بیشتر نباشه
## UNSIGNED
### یعنی عددی که قراره بگیره مثبت باشه
## AUTO_INCREMENT
### یعنی اگر ما چیزی ندادم بی صورت پیش فرض خودش عدد بده
## PRIMARY KEY 
### یعنی چیز تکراری نباشه

## firstname VARCHAR(255) NOT NULL,
### سطری با اسم firstname
## VARCHAR(255)
### یعنی تعداد حروف از 255 بیشتر نباشه
## NOT NULL
### یعنی نباید خالی باشه

```sql
INSERT INTO users (first_name, last_name, email, password)
VALUES ('ali', 'ahmadi', 'a.ahmadi@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b');
```
## INSERT INTO users
### اضافه کن به تیبل user
## (first_name, last_name, email, password)
### در سطون های بالا
## VALUES ('ali', 'ahmadi', 'a.ahmadi@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b');
### با مقدار زیر

## برای بروز رسانی جدول

```sql
UPDATE users SET password = '$2a$12$5FqHt0LE/TpWkUYtgYEMH.D5vzrSoj4lmXWsU.C3NU31xVVPhDm8O';
```
### UPDATE table-name set elment-name=""
### اپدیت کن جدول table-name  
### SET password = '$2a$12$5FqHt0LE/TpWkUYtgYEMH.D5vzrSoj4lmXWsU.C3NU31xVVPhDm8O'
### تغیر بده تمام پسورد ها رو به ""

## برای انتخاب و نمایش یک سطر یا جدول
```sql
select * from users 
select email,password from users 
```
## select * from users
### انتخاب کن تمام جدول user رو

## یعنی داده تکراری بهمون نده
```sql
SELECT DISTINCT column1 FROM tableName;
```
## برای شرط گزاشتن یعنی اگر شرط برقرار بود اجرا شه
```sql
SELECT * FROM customers WHERE country = 'Germany';
```
## WHERE country = 'Germany'
## اون هایی که کانتری شون با المان برابر هست رو نشون بده
## تغیر بده پسورد اون کاربری که یوزر نیمش ادمین هست
```sql
UPDATE users SET password = '$2a$12$5FqHt0LE/TpWkUYtgYEMH.D5vzrSoj4lmXWsU.C3NU31xVVPhDm8O' WHERE username = 'admin';
```

## تمام اون هایی که در جدول هست
```sql
SELECT COUNT(*) FROM customers WHERE city = 'London';
```
## میانگین اون المنت های انتخابی
```sql
SELECT avg(quantity) FROM orderDetails WHERE orderId = 'hfhg'
```
## جمع تمام المنت ها
```sql
SELECT SUM(quantity) FROM orderDetails WHERE orderId = 10401;
```
## برای تغیرات دیتا تایپ 
```sql
alter table users modify column email varchar(50)
```
## برای وصل کردن دو جدول به هم
```sql
ALTER TABLE event_user 
   ADD FOREIGN KEY (event_id) REFERENCES events (id);
```
## ON DELETE CASCADE ON UPDATE CASCADE
## برای زمانی که یک داده را پاک کردیم در جدولی که وصل شده هم پاک شود

# delete table
```my sql
DROP TABLE _table_name_;
```
