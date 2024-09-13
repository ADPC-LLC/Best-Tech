using System;

namespace CSharp_Test
{
    class CSharp_Std
    {
            static void Main(string[] args)
            {
                Console.WriteLine("Hello World! I'm running on C#.");

            for (int i = 1; i <= 100; i++)
            {
                if (i % 5 == 0 && i % 7 == 0)
                {
                    Console.WriteLine("Five-Seven");
                }
                else if (i % 5 == 0)
                {
                    Console.WriteLine("Five");
                }
                else if (i % 7 == 0)
                {
                    Console.WriteLine("Seven");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}
