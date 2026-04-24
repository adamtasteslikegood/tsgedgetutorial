// To run this code you need to install the following dependencies:
// dotnet add package Google.GenAI

using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Google.GenAI;
using Google.GenAI.Types;

public class
{
    public static async Task Main(string[] args)
    {
        var client = new Client(
            apiKey: Environment.GetEnvironmentVariable("GEMINI_API_KEY")
        );

        var model = "gemini-3-flash-preview";
        var contents = new List<Content>
        {
            new Content
            {
                Role = "user",
                Parts = new List<Part>
                {
                    new Part { Text = "INSERT_INPUT_HERE" },
                }
            },
        };

        var tools = new List<Tool>
        {
            new Tool
            {
                GoogleSearch = new GoogleSearch
                {
                }
            },
        };


        var config = new GenerateContentConfig
        {
            ThinkingConfig = new ThinkingConfig
            {
                ThinkingLevel = "HIGH"
            },
            Tools = tools,
        };

        await foreach (var chunk in client.Models.GenerateContentStreamAsync(model, contents, config))
        {
            Console.Write(chunk);
        }
    }

}
