/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bhanu.javawebsocket;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.server.ServerEndpoint;

/* Json Parsing */
import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.stream.JsonParser;

@ServerEndpoint("/serverendpoint")
public class WSServer {
    private final static String FILENAME = "data/data.json";
    
    @OnOpen
    public void handleOpen() {
        System.out.println("Client is now connected...");
    }
        
    @OnMessage 
    public String handleMessage(String request) {
        System.out.println("Message Received from client: " + request);
        String replyMessage = "http://localhost:8080/JavaWebSocket/src/data.json";
        return replyMessage;
    }
    
    @OnClose
    public void handleClose() {
        System.out.println("Client is now disconnected");
    }
    
    @OnError
    public void handleError(Throwable t) {
        t.printStackTrace();
    }
}
