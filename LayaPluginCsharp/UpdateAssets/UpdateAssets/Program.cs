using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace UpdateAssets
{
    class Program
    {
        static string writejson = "base.json";
        static void Main(string[] args)
        {
            var root = @"E:\LayaProgram\layapbb\bin\res";
            Console.WriteLine(CreateDirectoryJson(root,false));
        }
        public static string CreateDirectoryJson(string root,bool compass=true)
        {
            var obj = new JObject();
            CreateDirectoryJson(obj,root,true);
            if(compass)
                 return Regex.Replace(obj.ToString(),@"\s","");
            return obj.ToString();
        }
        static Dictionary<string, List<string>> FliterDic = new Dictionary<string, List<string>>() {
             {"configs",new List<string>(){"json","txt","xml"} },
             {"fairygui",new List<string>(){"fui"} },
             {"images",new List<string>(){"jpg","png","jpeg"} },
             {"sounds",new List<string>(){"mp3","ogg","wav"} },
             {"fonts",new List<string>(){"fnt","ttf"} },
             {"atlas",new List<string>(){ "als" ,"atlas"} },
             {"scenes",new List<string>(){"ls"} },
             {"sprite3d",new List<string>(){"lh"} },
        };
        static void CreateDirectoryJson(JObject obj,string root,bool first)
        {
            root = root.Replace("\\", "/");
            foreach (var item in Directory.GetFiles(root))
            {
                if (first && item.Contains(writejson)) continue;
                if (!Path.HasExtension(item)) continue;
                dynamic o = obj;
                o[Path.GetFileNameWithoutExtension(item)] = Path.GetExtension(item).Substring(1);
            }
            foreach (var item in Directory.GetDirectories(root)) 
            {
                var path = item.Replace("\\", "/");
                path = path.Substring(path.LastIndexOf('/')+1);
                dynamic o = new JObject();
                ((dynamic)obj)[path] = o;
                CreateDirectoryJson(o, item,false);
            }
        }
    }
}
