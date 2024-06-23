```c#
Console.WriteLine("Hello, World!");
```
# برای نوشتن در یک خط 

# برای اینکه تا دکمه ای کلیک نشد صفحه باز بمونه
```c#
Console.ReadKey();
```

# برای دادن زمان به المنت 
```c#
Console.WriteLine("Hello, World!");
Console.Beep(200, 800);
```

# برای دادن رنگ به فونت
```c#
Console.ForegroundColor = ConsoleColor.DarkBlue;
```

# برای دادن بکگراند به متن یا المنت
```c#
Console.BackgroundColor = ConsoleColor.DarkGreen;
```

# برای بکگراند دادن به تمام صفحه 
```c#
Console.BackgroundColor = ConsoleColor.DarkGreen;
Console.Clear();
```

# برای اینکه بگیم متن از کجای صفحه شروع بشه
```c#
Console.SetCursorPosition(20, 50);
```

# تعریف متغیر متنی
```c#
string armin = "armin";
```

# برای گرفتن داده متنی از کاربر
```c#
string armin = Console.ReadLine();
```

# برای تبدید داده متنی به عدد یا هرچیز دیگر
```c#
ushort age = ushort.Parse(Console.ReadLine());
```

# تعریف داده عددی 
```c#
int av = 12;
```

# گرفتن داده از کاربرم متنی

```
string armin = Console.ReadLine();
```

# parse 
## برای تبدیل داده به داده دیگز
```
int armin = int.Parse(Console.ReadLine());
```
# برای گزاشتن متغیر در استرینگ
```
Console.WriteLine("age:{0}",armin);
```
# استفاده از عبارت های ریاضی 
```
Console.WriteLine("age:{0}",Math.PI*armin);
```