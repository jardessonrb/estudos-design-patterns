package sources.command.source;

public class LigaDesligaLampadaConcreteCommand implements Command {
    private LampadaReceiver lampada;
    public LigaDesligaLampadaConcreteCommand(LampadaReceiver lampada){
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
