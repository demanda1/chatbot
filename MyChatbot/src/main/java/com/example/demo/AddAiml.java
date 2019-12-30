package com.example.demo;

import java.io.File;

import org.alicebot.ab.Bot;
import org.alicebot.ab.MagicBooleans;

public class AddAiml {
	
	private static final boolean TRACE_MODE = false;
	static String botName ="super";
	
	public static void main(String[] args) {
		try {
			String resourcePath = getResourcesPath();
			System.out.println(resourcePath);
			MagicBooleans.trace_mode=TRACE_MODE;
			Bot bot = new Bot("super",resourcePath);
			
			bot.writeAIMLFiles();
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	}

	private static String getResourcesPath() {
		// TODO Auto-generated method stub
		File currDir = new File(".");
        String path = currDir.getAbsolutePath();
        path = path.substring(0, path.length() - 2);
        System.out.println(path);
        String resourcesPath = path + File.separator + "src" + File.separator + "main" + File.separator + "resources";
        return resourcesPath;
	}
}
