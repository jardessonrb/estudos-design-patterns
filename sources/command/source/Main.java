package sources.command.source;

public class Main {
    public static void main(String[] args) {
        Lampada luzQuarto = new Lampada("Luz do quarto");
        Lampada luzCozinha = new Lampada("Luz da cozinha");

        LigaDesligaLampadaCommand ligador = new LigaDesligaLampadaCommand(luzCozinha);
        LigaDesligaLampadaCommand ligador2 = new LigaDesligaLampadaCommand(luzQuarto);
        
        CasaInteligenteInvoker invocador = new CasaInteligenteInvoker();

        invocador.addCommand("luzquarto", ligador);
        invocador.addCommand("luzcozinha", ligador2);

        invocador.executeCommand("luzquarto");
        // invocador.ligarTudo();
    }
}
