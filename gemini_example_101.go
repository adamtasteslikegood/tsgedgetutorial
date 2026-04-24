package main

import (
  "context"
  "flag"
  "fmt"
  "log"

  "google.golang.org/genai"
)

var model = flag.String("model", "gemini-3-flash-preview", "the model name, e.g. gemini-3-flash-preview")

func run(ctx context.Context) {
  client, err := genai.NewClient(ctx, &genai.ClientConfig{
    Backend: genai.BackendGeminiAPI,
    APIKey: os.Getenv("GEMINI_API_KEY"),
  })
  if err != nil {
    log.Fatal(err)
  }

  var tools = []*genai.Tool{
    {
      GoogleSearch: &genai.GoogleSearch{
      },
    },
  }

  var config *genai.GenerateContentConfig = &genai.GenerateContentConfig{
    Tools: tools,
    ThinkingConfig: &genai.ThinkingConfig{
      ThinkingLevel: genai.Ptr[string]("HIGH"),
    },
  }

  var contents = []*genai.Content{
    &genai.Content{
      Role: "user",
      Parts: []*genai.Part{
        &genai.Part{
          Text: "INSERT_INPUT_HERE",
        },
      },
    },
  }

  // Call the GenerateContent method.
  result, err := client.Models.GenerateContent(ctx, *model, contents, config)
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(result.Text())
}

func main() {
  ctx := context.Background()
  flag.Parse()
  run(ctx)
}
