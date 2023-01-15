package sources.command.source;

public class Main {
    public static void main(String[] args) {
        LampadaReceiver luzQuarto = new LampadaReceiver("Luz do quarto");
        LampadaReceiver luzCozinha = new LampadaReceiver("Luz da cozinha");

        LigaDesligaLampadaConcreteCommand ligador = new LigaDesligaLampadaConcreteCommand(luzCozinha);
        LigaDesligaLampadaConcreteCommand ligador2 = new LigaDesligaLampadaConcreteCommand(luzQuarto);
        
        CasaInteligenteInvoker invocador = new CasaInteligenteInvoker();

        invocador.addCommand("luzquarto", ligador);
        invocador.addCommand("luzcozinha", ligador2);

        invocador.executeCommand("luzquarto");
        // invocador.ligarTudo();
    }
}
