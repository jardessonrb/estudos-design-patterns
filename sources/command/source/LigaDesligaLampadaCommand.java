package sources.command.source;

public class LigaDesligaLampadaCommand implements CasaInteligenteCommand {
    private Lampada lampada;
    public LigaDesligaLampadaCommand(Lampada lampada){
        this.lampada = lampada;
    }
    @Override
    public void execute() {
        this.lampada.on();
    }

    @Override
    public void undo() {
        this.lampada.off();        
    }
}
