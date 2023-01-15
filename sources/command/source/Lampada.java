package sources.command.source;

public class Lampada {
    private Boolean isOn = false;
    private int intensidade = 50;
    private String nome;

    public Lampada(String nome){
        this.nome = nome;
    }

    public String getStatus(){
        return this.isOn ? "ON" : "OFF";
    }

    public Boolean on(){
        this.isOn = true;
        System.out.println(String.format("A lampada %s está %s", this.nome, this.getStatus()));

        return this.isOn;
    }

    public Boolean off(){
        this.isOn = false;
        System.out.println(String.format("A lampada %s está %s", this.nome, this.getStatus()));

        return this.isOn;
    }

    public int aumentarIntensidade(){
        if(this.intensidade >= 10) return this.intensidade;

        return this.intensidade += 1;
    }

    public int diminuirIntensidade(){
        if(this.intensidade <= 0) return this.intensidade;

        return this.intensidade -= 1;
    }
}