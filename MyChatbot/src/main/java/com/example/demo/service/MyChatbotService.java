package com.example.demo.service;

import java.io.File;

import org.alicebot.ab.Bot;
import org.alicebot.ab.Chat;
import org.alicebot.ab.History;
import org.alicebot.ab.MagicBooleans;
import org.alicebot.ab.MagicStrings;
import org.springframework.stereotype.Service;

@Service
public class MyChatbotService {
	private static final boolean TRACE_MODE = false;
	static String botName ="test";
	
	public String botService(String msg) {
		try {
        	String resourcesPath = getResourcesPath();
        	System.out.println(resourcesPath);
        	System.out.println(msg);
        	MagicBooleans.trace_mode = TRACE_MODE;
        	Bot bot = new Bot("test",resourcesPath);
        	Chat chatSession = new Chat(bot);
        	bot.brain.nodeStats();
        	String textLine = "";
        	
        	while(true) {
        		System.out.println("Human : ");
        		textLine = msg;
        		if((textLine== null) || (textLine.length()<1))
        			textLine= MagicStrings.null_input;
        		if(textLine.equals("q")) {
        			System.exit(0);
        		}
        		else if(textLine.equals("wq")) {
        			bot.writeQuit();
        			System.exit(0);
        		} else {
        			String request = textLine;
        			if(MagicBooleans.trace_mode)
        				System.out.println("STATE="+request + ":THAT=" + ((History) chatSession.thatHistory.get(0)).get(0) + ":TOPIC=" + chatSession.predicates.get("topic"));
        			String response=chatSession.multisentenceRespond(request);
        			while (response.contains("&lt;"))
        				response = response.replace("&lt", "<");
        			while (response.contains("&gt;"))
        				response = response.replace("&gt;", ">");
        			System.out.println("Robot: "+ response);
        			return response;
        		}
        		
        	}	
        }
        catch (Exception e) {
			// TODO: handle exception
        	e.printStackTrace();
		}
		return "default message";
    }

	private static String getResourcesPath() {
		// TODO Auto-generated method stub
		File currDir = new File(".");
		String path = currDir.getAbsolutePath();
		path= path.substring(0, path.length()-2);
		System.out.println(path);
		String resourcesPath = path + File.separator + "src" + File.separator + "main" + File.separator + "resources";
		return resourcesPath;
		
	}
}
