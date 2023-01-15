package sources.command.source;

import java.util.HashMap;
import java.util.Map;

public class CasaInteligenteInvoker {
    private Map<String, CasaInteligenteCommand> commands;

    public CasaInteligenteInvoker(){
        this.commands = new HashMap();
    }

    public void addCommand(String key, CasaInteligenteCommand command){
        if(this.commands.containsKey(key)){
            return;
        }

        this.commands.put(key, command);
    }

    public void executeCommand(String key){
        if(!this.commands.containsKey(key)){
            return;
        }

        this.commands.get(key).execute();
    }

    public void undoCommand(String key){
        if(!this.commands.containsKey(key)){
            return;
        }

        this.commands.get(key).undo();
    }

    public void ligarTudo(){
        this.commands.values().forEach(command -> {
            command.execute();
        });
    }
}

 